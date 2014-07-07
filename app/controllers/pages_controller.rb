class PagesController < ApplicationController

  def index
    @pages = Page.all
  end
  def home
  end

  def contact
  end

  def guest
  end

  def library
  end

  def membership
    @page = Page.find(1)
  end

  def note
  end

  def race
     @page = Page.find(2)
  end

  def social
     @page = Page.find(3)
  end
end