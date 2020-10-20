class AddEnabledColumnToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :enabled, :boolean, :default => true
  end
end
