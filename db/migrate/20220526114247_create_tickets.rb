class CreateTickets < ActiveRecord::Migration[6.1]
  def change
    create_table :tickets do |t|
      t.string :name
      t.text :description
      t.references :sprint, index: true
      
      t.timestamps
    end
  end
end
