class MarketsController < ApplicationController
  def create
    @farm = Farm.find(params[:market][:farm_id])
    @farm_market_exists = @farm.markets.where(name: params[:market][:name], parsed_address: params[:market][:address]).exists?
    @market_exists = Market.where(name: params[:market][:name], parsed_address: params[:market][:address]).exists?

    if !@farm_market_exists && !@market_exists
      @market = Market.new(market_params)
    elsif !@farm_market_exists && @market_exists
      @market = Market.where(name: params[:market][:name], parsed_address: params[:market][:address]).first
    else
      redirect_to :back
    end

    @market.farms << @farm
    @market.save
    redirect_to :back
  end

  def destroy
    @farm = Farm.find(params[:farm_id])
    @market = Market.find(params[:id])
    @farm.markets.delete(@market)
    redirect_to :back
  end

  autocomplete :market, :name, :full => true, :extra_data => [:parsed_address, :market_day]

  def index
    @markets = Market.all
    @farms = Farm.all
  end

  def show
    @market = Market.find(params[:id])
  end

  def search
    @markets = Market.where("name ilike ?", "%#{params[:query]}%").take(10).to_json
    respond_to do |format|
      format.json { render :json => @markets}
    end
  end

  def market_by_name
    @market = Market.where(name: params[:query]).first.to_json
    respond_to do |format|
      format.json { render :json => @market }
    end
  end

  private

  def market_params
    params.require(:market).permit(
      :id,
      :name,
      :address,
      :market_day,
      :lat,
      :lng
    )
  end
end
