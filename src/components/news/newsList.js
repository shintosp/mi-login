import React from "react";

class NewsList extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };
  }
  componentDidMount() {
    fetch(
      "https://api.breakingapi.com/news?q=climate&type=headlines&locale=en-US&api_key=BC59D05936FF4B49BAB4BDE150B0CCB7"
    )
      .then(body => body.json())
      .then(body => {
        this.setState({ articles: body.articles });
      });
  }
  render() {
    if (this.state.articles.length > 0) {
      return (
        <div className="align-center">
          <h1>Latest News</h1>
          <ul>
            {this.state.articles.map(news => (
              <li>
                <h2>
                  <a href={news.link} target="_blank">
                    {news.title}
                  </a>
                </h2>
              </li>
            ))}
          </ul>
          <button onClick={() => this.props.history.push("/home")}>
            Back to Home
          </button>
        </div>
      );
    } else {
      return (
        <div className="align-center">
          <h1>Please wait News is loading...</h1>
        </div>
      );
    }
  }
}

export default NewsList;
