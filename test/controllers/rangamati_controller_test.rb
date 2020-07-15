require 'test_helper'

class RangamatiControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get rangamati_index_url
    assert_response :success
  end

end
