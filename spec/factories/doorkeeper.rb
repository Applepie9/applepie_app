FactoryBot.define do
  factory :access_grant, class: "Doorkeeper::AccessGrant" do
    sequence(:resource_owner_id) { |n| n }
    application
    expires_in { 100 }
    scopes { "public write" }
  end

  factory :access_token, class: "Doorkeeper::AccessToken" do
    sequence(:resource_owner_id) { |n| n }
    application
    expires_in { 2.hours }
  end

  factory :application, class: "Doorkeeper::Application" do
    sequence(:name) { |n| "Application #{n}" }
  end
end