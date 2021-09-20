class Course < ApplicationRecord
    belongs_to :Professor
    has_many :studens

    validates :name, presence: true
    validates :category, presence: true
    validates :description, presence: true
end
