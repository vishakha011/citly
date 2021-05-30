class LinksController < ApplicationController

  def index
    links = Link.all
    render status: :ok, json: {links: links}
  end

  def create
  end
end
