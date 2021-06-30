require "test_helper"

class LinkTest < ActiveSupport::TestCase

  def setup
    @link = Link.new(original_url: 'https://example.com',
    shortened_url: 'http://localhost:3000/12345',
    slug: '12345')

    Link.delete_all
  end

  def test_instance_of_link
    assert_instance_of Link, @link
  end

  def test_value_of_original_url_assigned
    assert_equal 'https://example.com', @link.original_url
  end

  def test_error_raised
    assert_raises ActiveRecord::RecordNotFound do
      Link.find(SecureRandom.uuid)
    end
  end

  def test_value_created_at
    assert_nil @link.created_at
  
    @link.save!
    assert_not_nil @link.created_at
  end

  def test_count_of_number_of_links
    assert_difference ['Link.count'], 2 do
      Link.create!(original_url: 'https://example.com',
      shortened_url: 'http://localhost:3000/14551',
      slug: '14551')
      Link.create!(original_url: 'https://example2.com',
      shortened_url: 'http://localhost:3000/12abc',
      slug: '12abc')
    end
  end

  def test_link_should_not_be_valid_without_original_url
    @link.original_url = ''
    assert @link.invalid?
  end

  def test_link_should_not_be_valid_without_slug
    @link.slug = ''
    assert @link.invalid?
  end


  def test_slug_to_be_reused_after_getting_deleted
    test_link = Link.create!(original_url: 'https://example3.com',
    shortened_url: 'http://localhost:3000/13a1c',
    slug: '13a1c')
  
    test_link_slug = test_link.slug
    test_link.destroy
    assert_nothing_raised do
      Link.create!(original_url: 'https://example123.com',
      shortened_url: 'http://localhost:3000/#{test_link}',
      slug: test_link_slug)
    end
  end

  def test_validation_should_accept_valid_original_urls
    valid_urls = %w[https://example.com http://example.COM 
                    https://US-ER.example.org http://first.example.in?a=4]
  
    valid_urls.each do |url|
      @link.original_url = url
      assert @link.valid?
    end
  end

  def test_validation_should_accept_valid_shortened_urls
    valid_urls = %w[https://example.com/1234a http://example.COM/3452s 
                    https://US-ER.example.org/4567g http://example.in/6789g]
  
    valid_urls.each do |url|
      @link.shortened_url = url
      assert @link.valid?
    end
  end

end