import React from 'react'
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";

const CheckoutContainer = styled.section`
  max-width: 865px;
  padding: 4.5rem 2rem;
  margin: 0 auto;

  .checkout__heading {
    text-align: center;
    font-size: 3.5rem;
    color: #000000;
    margin-bottom: 2.4rem;
  }

  .order-item {
    box-shadow: rgb(153 196 227 / 25%) 0px 3px 8px;
    border-radius: 10px;
    background-color: white;
    margin-bottom: 3rem;
    position: relative;

    &__inner {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
    }

    &__image {
      width: 19.5rem;
      height: 19.5rem;
      box-shadow: rgb(153 196 227 / 25%) 0px 3px 8px;
      border-radius: 10px;
      flex-shrink: 0;
      object-fit: cover;
    }

    &__content {
      padding: 2.4rem 3.4rem;
      display: flex;
      flex-direction: column;
      -webkit-box-flex: 1;
      flex-grow: 1;
    }

    &__title {
      color: rgb(71, 71, 71);
      font-size: 2.1rem;
      font-weight: bold;
      margin-bottom: 1.5rem;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
    }
    
    &__price {
      display: flex;
      -webkit-box-align: baseline;
      align-items: baseline;
      margin-top: auto;
    }

    &__remove {
      font-size: 2rem;
      color: rgb(196, 196, 196);
      cursor: pointer;
      margin-left: auto;
    }
  }

  .price {
    color: rgb(70, 181, 161);
    font-size: 2.2rem;
    font-weight: 600;
    margin-right: 4rem;

    &--sale {
      color: rgb(84, 84, 84);
      font-size: 1.8rem;
      font-weight: 500;
      text-decoration: line-through rgb(165, 165, 165);
    }
  }

  .primary {
    color: rgb(41, 121, 255) !important;
  }
`
const ButtonComplete = styled.button`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 100%;
  color: white;
  font-size: 2.5rem;
  background: rgb(41, 121, 255);
  box-shadow: rgb(153 196 227 / 25%) 0px 3px 8px;
  border-radius: 7px;
  padding: 1.5rem;

  .icon {
    width: 2.5rem;
    height: 2.5rem;
    color: rgb(41, 121, 255);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    border-radius: 5rem;
    margin-right: 2rem;
    background-color: white;
  }

  span {
    letter-spacing: 0.5px;
    font-weight: 700;
  }
`
export default function Checkout() {
    return (
        <CheckoutContainer>
            <h2 className="checkout__heading">
                Xem lại yêu cầu đăng ký
            </h2>
            <div className="order-item">
                <div className="order-item__inner">
                    <img src="https://static.kt.city/cjygynzur2r1b0919y0lp4rez/content-marketing-1585915305260.png"
                         alt="" cover lazyloaded className="order-item__image"/>
                    <div className="order-item__content">
                        <h3 className="order-item__title">Khóa học Content Marketing A-Z - Bí quyết triển khai và sáng
                            tạo content đa kênh</h3>
                        <div className="order-item__price">
                            <div className="price">470,000đ</div>
                            <div className="price--sale">899,000đ</div>
                            <span className="primary order-item__remove">Bỏ khóa này</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="order__payment"></div>
            <div className="order__total"></div>
            <ButtonComplete className="btn btn--complete">
                <FontAwesomeIcon className="icon point-none" icon={faAngleRight} />
                <span>Hoàn tất đăng ký</span></ButtonComplete>
        </CheckoutContainer>
    )
}
