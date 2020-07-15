require 'test_helper'

class CoxbazarControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get coxbazar_index_url
    assert_response :success
  end

end
