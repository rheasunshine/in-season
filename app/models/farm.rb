class Farm < ApplicationRecord
  acts_as_mappable :default_units => :kms, :auto_geocode => true

  belongs_to :user
  has_many :crops
  has_and_belongs_to_many :markets

  validates :name, presence: true
  validates :farmer, presence: true

  mount_uploader :banner_image, BannerUploader
  mount_uploader :profile_image, AvatarUploader
end
