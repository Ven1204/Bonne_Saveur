class Product < ApplicationRecord
  has_many :orders
  has_many :users, through: :orders
  has_many :reviews, dependent: :destroy

  def avg_num
    reviews.average(:ratings).round(2).to_f
  end
end
