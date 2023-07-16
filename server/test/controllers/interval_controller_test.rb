require "test_helper"

class IntervalControllerTest < ActionDispatch::IntegrationTest
  test "should get start_date:date" do
    get interval_start_date:date_url
    assert_response :success
  end

  test "should get end_date:date" do
    get interval_end_date:date_url
    assert_response :success
  end

  test "should get target_value:integer" do
    get interval_target_value:integer_url
    assert_response :success
  end

  test "should get current_value:integer" do
    get interval_current_value:integer_url
    assert_response :success
  end
end
