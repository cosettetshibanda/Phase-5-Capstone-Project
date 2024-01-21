class User < ApplicationRecord
    has_secure_password

    has_many :comments, dependent: :destroy

    validates :username, presence: true, uniqueness: true
end
