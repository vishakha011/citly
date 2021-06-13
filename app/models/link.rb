class Link < ApplicationRecord
  validates :original_url, presence: true, uniqueness: true, length: {maximum: 250}, format: URI::regexp(%w[http https])
  
  validates :shortened_url, presence: true, uniqueness: true, format: URI::regexp(%w[http https])

  validates :slug, presence: true, uniqueness: true
end