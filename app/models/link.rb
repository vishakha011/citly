class Link < ApplicationRecord
  validates :original_url, presence: true, uniqueness: true, length: {maximum: 50}, format: URI::regexp(%w[http https])
  
  validates :shortened_url, presence: true, uniqueness: true, format: URI::regexp(%w[http https])
  
  
end
