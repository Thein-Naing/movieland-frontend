import { useEffect, useRef, useState } from "react";
import api from "../api/axiosConfig";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ReviewForm from "../review/ReviewForm";



const Reviews = ({ getMovieData,reviews, setReviews, movie }) => {

  // const [reviews, setReviews] = useState();
  const revText = useRef();
  let params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    getMovieData(movieId);
  }, []);

  const addReview = async (e) =>{
    e.preventDefault();

    const review = revText.current;

    try
    {
        const response = await api.post("/api/v1/reviews",{reviewBody:review.value, imdbId:movieId});

        const updatedReviews = [...reviews || [], {body:review.value}];

        review.value = "";

        setReviews(updatedReviews);
        // setReviews(movieId.reviews);
    }
    catch(err)
    {
        console.error(err);
    }

  };

  return (
    <Container>
      <Row>
        <Col>
          <h3>Reviews</h3>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <img src={movie?.poster} alt="" />
        </Col>
        <Col>
          {
            <>
              <Row>
                <Col>
                  <ReviewForm
                    handleSubmit={addReview}
                    revText={revText}
                    labelText="Add your Review!"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <hr />
                </Col>
              </Row>
            </>
          }
          {reviews?.map((r) => {
            return (
              <>
                <Row>
                  <Col>{r.body}</Col>
                </Row>
                <Row>
                  <Col>
                    <hr />
                  </Col>
                </Row>
              </>
            );
          })}
        </Col>
      </Row>
      <Row>
        <Col>
          <hr />
        </Col>
      </Row>
    </Container>
  );
};

export default Reviews;
