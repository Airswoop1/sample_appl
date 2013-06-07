# == Schema Information
#
# Table name: create_rooms
#
#  id         :integer          not null, primary key
#  name       :string(255)
#  sessionId  :string(255)
#  public     :boolean
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class CreateRooms < ActiveRecord::Base
  attr_accessible :name, :public, :sessionId
end
