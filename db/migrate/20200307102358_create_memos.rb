class CreateMemos < ActiveRecord::Migration[5.2]
  def change
    create_table :memos do |t|
      t.string :memo
      t.date   :date
      t.bigint :user_id, foreign_key: true
      t.timestamps
    end
  end
end
