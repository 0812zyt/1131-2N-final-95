import styled from 'styled-components'
const Wrapper = styled.div`
  .blogs {
    padding: 2cqw 0;

    .section-title {
      h2 {
        text-align: center;
        text-transform: capitalize;
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
      }

      h3 {
        text-align: center;
        text-transform: capitalize;
        font-size: 1.2rem;
        margin-bottom: 1rem;
      }
    }
  }

  .blogs-center {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 1.5rem;
    /* max-width: 500px; */

    .blog {
      background-color: white;
      padding: 0.75rem;
      border-radius: var(--border-radius);
      margin-bottom: 2rem;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      transition: 0.5s ease-in-out all;

      .img {
        width: 100%;
        height: 12rem;
        display: block;
        object-fit: cover;
      }

      &:hover {
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
      }
      &-img {
        border-radius: var(--border-radius);
        margin-bottom: 0.5rem;
      }
      &-content {
        padding-bottom: 1rem;

        span {
          text-transform: uppercase;
          color: var(--primary);
          letter-spacing: var(--letter-spacing);
          font-weight: 500;
        }

        h3 {
          text-transform: capitalize;
          letter-spacing: var(--letter-spacing);
          margin: 0.5rem 0;
        }

        p {
          color: var(--grey);
          margin-bottom: 0.5rem;
        }

        a {
          text-transform: capitalize;
          color: var(--primary-dark);
          letter-spacing: 1px;
        }
      }
    }
  }

  /*
  ================
   item control
  ================
  */

  .item-control {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    transition: var(--transition);
    padding: 0.25rem 0.25rem 0 0;
    border-radius: var(--border-radius);
    text-transform: capitalize;

    .btn-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .edit-btn,
    .delete-btn {
      background: transparent;
      border-color: transparent;
      text-transform: capitalize;
      letter-spacing: 1px;
      cursor: pointer;
      font-size: 0.7rem;
      margin: 0 0.15rem;
      transition: var(--transition);
    }
    .edit-btn {
      color: rgba(0, 0, 255, 0.5);
    }
    .edit-btn:hover {
      color: blue;
      font-weight: 500;
    }
    .delete-btn {
      color: rgba(255, 0, 0, 0.5);
      background: rgba(255, 0, 0, 0.05);
      border-color: rgba(255, 0, 0, 0.1);
      color: rgba(255, 0, 0, 0.7);
      padding: 0.1rem 0.2rem;
    }
    .delete-btn:hover {
      color: red;
      font-weight: 500;
    }
  }

  .btn-control {
    display: flex;
    width: 50%;
    margin: 0 auto;
    align-items: center;
    gap: 1rem;

    .btn {
      text-transform: capitalize;
      align-items: center;
      margin: 0 auto;
      padding: 0.7rem 1.2rem;
      font-size: 1.2rem;
      letter-spacing: var(--letter-spacing);
      cursor: pointer;
      transition: var(--transition);
      margin-top: 1.25rem;

      &.clear-btn {
        background: rgba(255, 0, 0, 0.1);
        border-color: rgba(255, 0, 0, 0.2);
        color: rgba(255, 0, 0, 0.7);

        &:hover {
          color: red;
          background: rgba(255, 0, 0, 0.2);
        }
      }
      &.reload-btn {
        background: rgba(0, 119, 255, 0.3);
        border-color: rgba(0, 119, 255, 0.2);
        color: rgba(0, 119, 255, 0.7);

        &:hover {
          color: blue;
          background: rgba(0, 119, 255, 0.2);
        }
      }
    }
  }

  @media screen and (min-width: 450px) {
    .blogs-center {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (min-width: 768px) {
    .blogs-center {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media screen and (min-width: 992px) {
    .blogs-center {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`

export default Wrapper
