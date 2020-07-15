require 'test_helper'

class LalmaiControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get lalmai_index_url
    assert_response :success
  end

end
