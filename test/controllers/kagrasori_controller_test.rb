require 'test_helper'

class KagrasoriControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get kagrasori_index_url
    assert_response :success
  end

end
