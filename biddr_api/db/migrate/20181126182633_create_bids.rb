class CreateBids < ActiveRecord::Migration[5.2]
  def change
    create_table :bids do |t|
      t.integer :price

      t.timestamps
    end
  end
end
