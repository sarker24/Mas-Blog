require 'test_helper'

class SajakControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get sajak_index_url
    assert_response :success
  end

end
