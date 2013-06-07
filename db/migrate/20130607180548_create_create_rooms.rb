class CreateCreateRooms < ActiveRecord::Migration
  def change
    create_table :create_rooms do |t|
      t.string :name
      t.string :sessionId
      t.boolean :public

      t.timestamps
    end
  end
end
