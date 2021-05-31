class LinksController < ApplicationController
  before_action :generate_slug, :shortened_url, only: :create

  def index
    links = Link.all
    render status: :ok, json: {links: links}
  end

  def create
    @link = Link.new(link_params)
    if @link.save
      render status: :ok, json: { notice: t('successfully_created') }
    else
      render status: :unprocessable_entity, json: { errors: @link.errors.full_messages }
    end
  end
  
  
  private

    def link_params
      params.require(:link).permit(:original_url).merge(slug: @slug, shortened_url: @shortened_url)
    end

    def generate_slug
      @slug = SecureRandom.hex(4)
      link = Link.find_by(slug: @slug)
      generate_slug() if link
    end

    def shortened_url
      @shortened_url = "#{request.base_url}/#{@slug}"
    end

end
