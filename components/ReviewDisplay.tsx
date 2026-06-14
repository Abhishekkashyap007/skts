"use client";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

interface Review {
  id: number;
  name: string;
  city: string;
  rating: number;
  comment: string;
  date: string;
}

export default function ReviewDisplay() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [allReviews, setAllReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [visibleCount, setVisibleCount] = useState(5);
  const [newReview, setNewReview] = useState({
    name: "",
    city: "",
    rating: 0,
    comment: "",
  });

  // Capitalize first letter of each word
  const capitalizeWords = (str: string): string => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  // Handle input change with auto-capitalization
  const handleInputChange = (field: string, value: string) => {
    const capitalizedValue = capitalizeWords(value);
    setNewReview({ ...newReview, [field]: capitalizedValue });
  };

  // Page load होते ही database से reviews fetch करें
  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/reviews");
      const data = await response.json();
      if (Array.isArray(data)) {
        setAllReviews(data);
        setReviews(data.slice(0, visibleCount));
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
      toast.error("Error fetching reviews. Please try again.", {
        position: "top-right",
        autoClose: 2000,
      });
    } finally {
      setLoading(false);
    }
  };

  // Load more reviews function
  const loadMoreReviews = () => {
    const nextCount = visibleCount + 5;
    setVisibleCount(nextCount);
    setReviews(allReviews.slice(0, nextCount));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (newReview.rating === 0) {
      toast.error("Please provide a rating!", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newReview),
      });

      if (response.ok) {
        const savedReview = await response.json();
        const updatedAllReviews = [savedReview, ...allReviews];
        setAllReviews(updatedAllReviews);
        setReviews(updatedAllReviews.slice(0, visibleCount));
        setNewReview({ name: "", city: "", rating: 0, comment: "" });
        setShowForm(false);
        toast.success("Thank you! Your review has been saved successfully.", {
          position: "top-right",
          autoClose: 2000,
        });
      } else {
        toast.error("Error submitting review. Please try again.", {
          position: "top-right",
          autoClose: 2000,
        });
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      toast.error("Error submitting review. Please try again.", {
        position: "top-right",
        autoClose: 2000,
      });
    } finally {
      setSubmitting(false);
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div style={{ display: "flex", gap: 2, marginBottom: 10 }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            style={{
              color: star <= rating ? "#fbbf24" : "#d1d5db",
              fontSize: "1.3rem",
              fontWeight: "bold",
            }}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  // Loading state
  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "40px 20px" }}>
        <div style={{ fontSize: "1.2rem", color: "#666" }}>
          Loading reviews...
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Reviews Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 24,
          marginBottom: 40,
        }}
      >
        {reviews.length === 0 ? (
          <div
            style={{
              gridColumn: "1 / -1",
              textAlign: "center",
              padding: "40px 20px",
              color: "#666",
            }}
          >
            No reviews yet. Be the first to review!
          </div>
        ) : (
          reviews.map((review) => (
            <div
              key={review.id}
              className="card"
              style={{
                padding: "28px 24px",
                textAlign: "left",
                background: "white",
                borderRadius: 12,
                boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 6px 20px rgba(0,0,0,0.12)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 2px 12px rgba(0,0,0,0.08)";
              }}
            >
              {/* Stars */}
              {renderStars(review.rating)}

              {/* Comment */}
              <p
                style={{
                  color: "#444",
                  lineHeight: 1.7,
                  marginBottom: 16,
                  fontStyle: "italic",
                  fontSize: "0.95rem",
                  minHeight: "60px",
                }}
              >
                "{review.comment}"
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    background: "linear-gradient(135deg, #e05a1c, #f97316)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                  }}
                >
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      color: "#1a2744",
                      fontSize: "0.95rem",
                    }}
                  >
                    {review.name}
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "#888" }}>
                    {review.city} • {review.date}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Load Older Reviews Button */}
      {reviews.length < allReviews.length && (
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <button
            onClick={loadMoreReviews}
            style={{
              background: "transparent",
              color: "#e05a1c",
              border: "2px solid #e05a1c",
              padding: "12px 32px",
              borderRadius: 8,
              fontWeight: 700,
              fontSize: "0.95rem",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.background = "#e05a1c";
              (e.target as HTMLElement).style.color = "white";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.background = "transparent";
              (e.target as HTMLElement).style.color = "#e05a1c";
            }}
          >
            Load Older Reviews ({allReviews.length - reviews.length} more)
          </button>
        </div>
      )}

      {/* Add Review Button */}
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <button
          onClick={() => setShowForm(!showForm)}
          style={{
            background: "#e05a1c",
            color: "white",
            border: "none",
            padding: "14px 32px",
            borderRadius: 8,
            fontWeight: 700,
            fontSize: "1rem",
            cursor: "pointer",
            transition: "all 0.2s",
            boxShadow: "0 4px 12px rgba(224, 90, 28, 0.3)",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.transform = "translateY(-2px)";
            (e.target as HTMLElement).style.boxShadow =
              "0 6px 16px rgba(224, 90, 28, 0.4)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.transform = "translateY(0)";
            (e.target as HTMLElement).style.boxShadow =
              "0 4px 12px rgba(224, 90, 28, 0.3)";
          }}
        >
          {showForm ? "✕ Cancel" : "⭐ Write a Review"}
        </button>
      </div>

      {/* Review Form */}
      {showForm && (
        <div
          style={{
            background: "white",
            padding: "40px 32px",
            borderRadius: 16,
            boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
            maxWidth: 600,
            margin: "0 auto",
          }}
        >
          <h3
            style={{
              color: "#1a2744",
              fontWeight: 800,
              fontSize: "1.4rem",
              marginBottom: 24,
              textAlign: "center",
            }}
          >
            Share Your Experience
          </h3>

          <form onSubmit={handleSubmit}>
            {/* Star Rating */}
            <div style={{ marginBottom: 24, textAlign: "center" }}>
              <div
                style={{
                  fontSize: "0.95rem",
                  color: "#555",
                  marginBottom: 12,
                  fontWeight: 600,
                }}
              >
                Rate your experience:
              </div>
              <div
                style={{ display: "flex", gap: 10, justifyContent: "center" }}
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setNewReview({ ...newReview, rating: star })}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "2.5rem",
                      color: star <= newReview.rating ? "#fbbf24" : "#e5e7eb",
                      transition: "all 0.2s",
                      transform:
                        star <= newReview.rating ? "scale(1.15)" : "scale(1)",
                    }}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            {/* Name & City */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
                marginBottom: 16,
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    fontWeight: 600,
                    color: "#1a2744",
                    marginBottom: 6,
                    fontSize: "0.9rem",
                  }}
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={newReview.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    border: "2px solid #e5e7eb",
                    borderRadius: 8,
                    fontSize: "0.95rem",
                    boxSizing: "border-box",
                    outline: "none",
                  }}
                  placeholder="Enter your name"
                  onFocus={(e) => (e.target.style.borderColor = "#e05a1c")}
                  onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                />
              </div>
              <div>
                <label
                  style={{
                    display: "block",
                    fontWeight: 600,
                    color: "#1a2744",
                    marginBottom: 6,
                    fontSize: "0.9rem",
                  }}
                >
                  City *
                </label>
                <input
                  type="text"
                  required
                  value={newReview.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    border: "2px solid #e5e7eb",
                    borderRadius: 8,
                    fontSize: "0.95rem",
                    boxSizing: "border-box",
                    outline: "none",
                  }}
                  placeholder="Enter your city"
                  onFocus={(e) => (e.target.style.borderColor = "#e05a1c")}
                  onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
                />
              </div>
            </div>

            {/* Comment */}
            <div style={{ marginBottom: 24 }}>
              <label
                style={{
                  display: "block",
                  fontWeight: 600,
                  color: "#1a2744",
                  marginBottom: 6,
                  fontSize: "0.9rem",
                }}
              >
                Your Review *
              </label>
              <textarea
                required
                value={newReview.comment}
                onChange={(e) => handleInputChange("comment", e.target.value)}
                rows={4}
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  border: "2px solid #e5e7eb",
                  borderRadius: 8,
                  fontSize: "0.95rem",
                  resize: "vertical",
                  boxSizing: "border-box",
                  fontFamily: "inherit",
                  lineHeight: 1.6,
                  outline: "none",
                }}
                placeholder="How was your experience with our service? Tell us about delivery time, driver behavior, truck condition, etc..."
                onFocus={(e) => (e.target.style.borderColor = "#e05a1c")}
                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitting}
              style={{
                width: "100%",
                background: submitting
                  ? "#9ca3af"
                  : "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                color: "white",
                border: "none",
                padding: "14px",
                borderRadius: 10,
                fontWeight: 700,
                fontSize: "1.05rem",
                cursor: submitting ? "not-allowed" : "pointer",
                boxShadow: "0 4px 12px rgba(16, 185, 129, 0.3)",
              }}
            >
              {submitting ? "Saving..." : "✓ Submit Review"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}