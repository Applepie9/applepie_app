require 'rails_helper'

RSpec.describe User do 
  describe ".authenticate" do
    context 'when email and password provided is correct' do
      it 'returns the user' do
        user = create(:user, email: "foo@bar.com", password: "password", password_confirmation: "password")
        expect(described_class.authenticate("foo@bar.com", "password")).to eq user
      end
    end

    context "when email and password is incorrect" do
      it 'returns nil' do
        user = create(:user, email: "foo2@bar.com", password: "password", password_confirmation: "password")
        expect(described_class.authenticate("foo@bar.com", "fooo")).to be_nil
      end
    end
  end
end
