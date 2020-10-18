class CreateUsers < ActiveRecord::Migration[6.0]
  def up
    create_table :users do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.date :birthday, null: false
      t.integer :gender, default: 0
      t.timestamps
    end
    add_index :users, :email, unique: true
  end

  def down
    drop_table :users
  end
end
