import React from 'react'
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight, faEnvelope, faUser} from "@fortawesome/free-solid-svg-icons";


const CheckoutContainer = styled.section`
  max-width: 865px;
  padding: 4.5rem 2rem;
  margin: 0 auto;
  background-color: ${props => props.theme.colors.backgroundColor};

  .checkout__heading {
    text-align: center;
    font-size: 3.5rem;
    color: #000000;
    margin-bottom: 2.4rem;
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
const OrderItem = styled.div`
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
      width: 18rem;
      height: 16rem;
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
`
const OrderBox = styled.div`
  padding: 3rem 4rem;
  margin-bottom: 3rem;
  background-color: white;
  box-shadow: rgb(153 196 227 / 25%) 0px 3px 8px;
  border-radius: 10px;
  position: relative;

  .order-box {
    &__heading {
      font-size: 2.8rem;
      font-weight: bold;
      color: rgb(63, 63, 122);
      margin-bottom: 1.5rem;
    }
  }

`;
const OrderTotal = styled.div`
  .order-total {
    padding-top: 2rem;
    padding-bottom: 2rem;

    &__top {
      display: flex;
      align-items: center;
    }
  }

  .order {
    &-price-all {
      width: 50%;
    }

    &-price {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
    }

    &-saving {
      padding: 5px 1rem;
      background-color: rgba(188, 229, 252, 0.4);
      border-radius: 7px;
      color: rgb(41, 121, 255);
      display: inline-block;
      text-align: center;
    }
  }

  .price {
    font-size: 2.5rem;
    margin-right: 2rem;

    &--sale {
      font-size: 2rem;
      text-decoration: none;
      color: rgb(165, 165, 165);
    }
  }

  .voucher {
    width: 50%;

    &-add {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      padding: 1.5rem;
      background-color: rgb(246, 247, 251);
      border-radius: 10px;
      cursor: pointer;
    }

    .icon {
      max-width: 4rem;
      margin-right: 2rem;
    }

    .text {
      font-size: 2rem;
      font-weight: 500;
      color: rgb(71, 71, 71);
    }
  }

  .user-info {
    margin-top: 2.5rem;
    padding-top: 2.5rem;
    border-top: 1px solid rgb(222, 225, 243);

    &__title {
      font-size: 2rem;
    }

    &__item {
      margin-top: 2.5rem;
      display: flex;
      -webkit-box-align: baseline;
      align-items: baseline;
    }

    &__text {
      margin-left: 1rem;
      font-size: 1.8rem;
      font-weight: 500;
    }
  }
`;
const PaymentList = styled.div`
  background-color: rgb(246, 247, 251);
  border-radius: 10px;
  padding: 0px 2.5rem;
`
const PaymentItem = styled.div`
  padding: 2rem 0px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  color: rgb(71, 71, 71);

  &:not(:last-child) {
    border-bottom: 1px solid rgb(222, 225, 243);
  }

  .payment {
    &__icon {
      max-width: 4rem;
      margin-right: 2rem;
    }

    &__info {
      font-weight: 500;
      font-size: 2rem;
      width: 35rem;
      display: inline-block;
    }

    &__desc {
      position: relative;
      font-size: 1.6rem;
      font-weight: 500;
      padding-left: 1rem;
    }

    &__desc:before {
      content: "";
      width: 6px;
      height: 6px;
      border-radius: 1rem;
      background-color: rgb(35, 194, 127);
      position: absolute;
      top: 50%;
      left: 0px;
      transform: translateY(-50%);
    }

    &__check {
      width: 1.2rem;
      height: 1.2rem;
      background-color: rgb(177, 205, 252);
      display: inline-block;
      border-radius: 5rem;
      margin-left: auto;
      box-shadow: rgb(177 205 252) 0px 0px 0px 5px;
    }
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
  cursor: pointer;

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
            <OrderItem>
                <div className="order-item">
                    <div className="order-item__inner">
                        <img src="https://static.kt.city/cjygynzur2r1b0919y0lp4rez/content-marketing-1585915305260.png"
                             alt="" className="order-item__image"/>
                        <div className="order-item__content">
                            <h3 className="order-item__title">Khóa học Content Marketing A-Z - Bí quyết triển khai và
                                sáng
                                tạo content đa kênh</h3>
                            <div className="order-item__price">
                                <div className="price">470,000đ</div>
                                <div className="price--sale">899,000đ</div>
                                <span className="primary order-item__remove">Bỏ khóa này</span>
                            </div>
                        </div>
                    </div>
                </div>
            </OrderItem>
            <OrderItem>
                <div className="order-item">
                    <div className="order-item__inner">
                        <img src="https://static.kt.city/cjygynzur2r1b0919y0lp4rez/content-marketing-1585915305260.png"
                             alt="" className="order-item__image"/>
                        <div className="order-item__content">
                            <h3 className="order-item__title">Khóa học Content Marketing A-Z - Bí quyết triển khai và
                                sáng
                                tạo content đa kênh</h3>
                            <div className="order-item__price">
                                <div className="price">470,000đ</div>
                                <div className="price--sale">899,000đ</div>
                                <span className="primary order-item__remove">Bỏ khóa này</span>
                            </div>
                        </div>
                    </div>
                </div>
            </OrderItem>
            <OrderItem>
                <div className="order-item">
                    <div className="order-item__inner">
                        <img src="https://static.kt.city/cjygynzur2r1b0919y0lp4rez/content-marketing-1585915305260.png"
                             alt="" className="order-item__image"/>
                        <div className="order-item__content">
                            <h3 className="order-item__title">Khóa học Content Marketing A-Z - Bí quyết triển khai và
                                sáng
                                tạo content đa kênh</h3>
                            <div className="order-item__price">
                                <div className="price">470,000đ</div>
                                <div className="price--sale">899,000đ</div>
                                <span className="primary order-item__remove">Bỏ khóa này</span>
                            </div>
                        </div>
                    </div>
                </div>
            </OrderItem>

            <OrderBox>
                <h3 className="order-box__heading">
                    Chọn phương thức thanh toán
                </h3>
                <PaymentList>
                    <PaymentItem>
                        <img src="https://kt.city/static/icon-transfer.png" alt="" className="payment__icon"/>
                        <p className="payment__info">Chuyển khoản ngân hàng</p>
                        <div className="payment__desc">Hoàn thành ngay</div>
                        <div className="payment__check"></div>
                    </PaymentItem>
                    <PaymentItem>
                        <img src="https://kt.city/static/icon-momo.png" alt="" className="payment__icon"/>
                        <p className="payment__info">Ví điện tử MOMO</p>
                        <div className="payment__desc">Hoàn thành ngay</div>
                        <div className="payment__check"></div>
                    </PaymentItem>
                    <PaymentItem>
                        <img src="https://kt.city/static/card-visa.png" alt="" className="payment__icon"/>
                        <p className="payment__info">Thẻ ATM, Visa/Mastercard</p>
                        <div className="payment__desc">Hoàn thành ngay</div>
                        <div className="payment__check"></div>
                    </PaymentItem>
                    <PaymentItem>
                        <img src="https://kt.city/static/card-vnpay.png" alt="" className="payment__icon"/>
                        <p className="payment__info">Quét VNpay QRcode</p>
                        <div className="payment__desc">Hoàn thành ngay</div>
                        <div className="payment__check"></div>
                    </PaymentItem>
                    <PaymentItem>
                        <img src="https://kt.city/static/icon-balance.png" alt="" className="payment__icon"/>
                        <p className="payment__info">Số dư F8</p>
                        <div className="payment__desc">Hoàn thành ngay</div>
                        <div className="payment__check"></div>
                    </PaymentItem>
                </PaymentList>
            </OrderBox>
            <OrderBox>
                <OrderTotal>
                    <div className="order-total__top">
                        <div className="order-price-all">
                            <div className="order-price">
                                <div className="price">479,000đ</div>
                                <div className="price--sale">
                                    Giá gốc: 899,000đ
                                </div>
                            </div>
                            <div className="order-saving">
                                Tiết kiệm 47% (420,000đ)
                            </div>
                        </div>
                        <div className="voucher">
                            <div className="voucher-add">
                                <img src="https://kt.city/static/gmb-coupon.png" alt="" className="icon"/>
                                <span className="text">Thêm voucher</span>
                            </div>
                        </div>
                    </div>
                    <div className="user-info">
                        <div className="user-info__header"><h3 className="user-info__title">Thông tin cá nhân</h3></div>
                        <div className="user-info__item">
                            <FontAwesomeIcon icon={faUser}/>
                            <span className="user-info__text">Tran Doan Kien Thuc</span>
                        </div>
                        <div className="user-info__item">
                            <FontAwesomeIcon icon={faEnvelope}/>
                            <span className="user-info__text">19130227@st.hcmuaf.edu.vn</span>
                        </div>
                    </div>
                </OrderTotal>
            </OrderBox>
            <ButtonComplete className="btn btn--complete">
                <FontAwesomeIcon className="icon point-none" icon={faAngleRight}/>
                <span>Hoàn tất đăng ký</span>
            </ButtonComplete>
        </CheckoutContainer>
    )
}
