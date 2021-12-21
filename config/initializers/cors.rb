require 'dotenv/load'

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins ENV["CLIENT_HOST"]
    resource "*", headers: :any, methods: [:get, :post, :put, :patch, :delete, :options, :head], credentials: true
  end
end
