class ProductsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:show, :index]

  def show
    @products = Product.all
  end


end
