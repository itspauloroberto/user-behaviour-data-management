class User < ApplicationRecord
  extend Enumerize

  validate :min_name_length
  validate :max_name_length
  validate :birthday_temporality

  enumerize :gender, in: {
    undefined: 0,
    male: 1,
    female: 2
  }, predicates: true, scope: true

  validates :email, presence: true, length: { minimum: 5, maximum: 100, too_long: "É permitido no máximo 100 caracteres", too_short: "É necessário pelo menos 5 carácteres" }
  validates :name, presence: true

  def min_name_length
    errors.add(:name, "O nome é muito pequeno, precisa de no mínimo três caracteres.") if name.present? && name.length < 3
  end

  def max_name_length
    errors.add(:name, "O nome é muito grande, só pode ter no máximo cinquenta caracteres.") if name.present? && name.length > 50
  end

  def birthday_temporality
    errors.add(:birthday, "A data de nascimento é invalida, pois não deve ser maior do que a data atual.") if birthday.present? && birthday > Time.zone.now
  end
end