class OrdersController < ApplicationController
def create
    @user = current_user
    if @user
      @product = Product.find(params[:product_id])

      order = Order.new(order_params)
      order.user = @user
      order.product = @product
      order.save

      redirect_to profile_path
    else
      redirect_to users__path
    end
  end

  def accept
    order = Order.find(params[:id])
    order.status = "Accepted"
    order.save!
    redirect_to "/"
  end

  def reject
    order = Order.find(params[:id])
    order.status = "Rejected"
    order.save!
    redirect_to "/"
  end

  private

  def order_params
    params.require(:order).permit(:posted_date)

  end
end
