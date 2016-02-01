json.total_count @search_results.total_count
json.results do
  json.array! @search_results do |result|
    result = result.searchable

    if result.class == User
      json.partial!("api/users/user", user: result)
    elsif result.class == Question
      json.partial!("api/questions/question", question: result)
    else
      json.partial!("api/answers/answer"), answer: answer)
    end

    json._type result.class.to_s
  end
end
