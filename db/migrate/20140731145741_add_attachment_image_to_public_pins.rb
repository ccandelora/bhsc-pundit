class AddAttachmentImageToPublicPins < ActiveRecord::Migration
  def self.up
    change_table :public_pins do |t|
      t.attachment :image
    end
  end

  def self.down
    drop_attached_file :public_pins, :image
  end
end
