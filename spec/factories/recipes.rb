FactoryBot.define do
  factory :recipe do
    user
    title { "Lorem" }
    ingredients  { "the" }
    content { "ipsum" }
  end
end