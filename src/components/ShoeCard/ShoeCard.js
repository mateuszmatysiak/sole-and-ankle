import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS } from "../../constants";
import { formatPrice, pluralize, isNewShoe } from "../../utils";
import Spacer from "../Spacer";

const ShoeCard = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) => {
  // There are 3 variants possible, based on the props:
  //   - new-release
  //   - on-sale
  //   - default
  //
  // Any shoe released in the last month will be considered
  // `new-release`. Any shoe with a `salePrice` will be
  // on-sale. In theory, it is possible for a shoe to be
  // both on-sale and new-release, but in this case, `on-sale`
  // will triumph and be the variant used.
  // prettier-ignore
  const variant = typeof salePrice === 'number'
    ? 'on-sale'
    : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default'

  return (
    <Link href={`/shoe/${slug}`}>
      <Wrapper>
        <ImageWrapper>
          <Image alt="" src={imageSrc} />
        </ImageWrapper>
        <Spacer size={12} />
        <Row>
          <Name>{name}</Name>
          <Price
            style={{
              "--color": variant === "on-sale" ? COLORS.gray[700] : null,
              "--text-decoration":
                variant === "on-sale" ? "line-through" : null,
            }}
          >
            {formatPrice(price)}
          </Price>
        </Row>
        <Row>
          <ColorInfo>{pluralize("Color", numOfColors)}</ColorInfo>
          {variant === "on-sale" ? (
            <SalePrice>{formatPrice(salePrice)}</SalePrice>
          ) : null}
        </Row>

        {variant === "new-release" ? <NewFlag>Just released!</NewFlag> : null}
        {variant === "on-sale" ? <SaleFlag>Sale</SaleFlag> : null}
      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.article`
  position: relative;
  flex: 1;
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 16px 16px 4px 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  transition: transform 500ms;
  transform-origin: 50% 70%;
  will-change: transform;

  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    ${Link}:hover &, 
    ${Link}:focus & {
      transform: scale(1.1);
      transition: transform 200ms;
    }
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
`;

const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
`;

const Price = styled.span`
  color: var(--color);
  text-decoration: var(--text-decoration);
`;

const ColorInfo = styled.p`
  color: ${COLORS.gray[700]};
`;

const SalePrice = styled.span`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.primary};
`;

const Flag = styled.span`
  position: absolute;
  top: 15px;
  right: -5px;
  color: ${COLORS.white};
  border-radius: 2px;
  padding: 8px 12px;
  font-weight: ${WEIGHTS.medium};
`;

const NewFlag = styled(Flag)`
  background-color: ${COLORS.secondary};
`;
const SaleFlag = styled(Flag)`
  background-color: ${COLORS.primary};
`;

export default ShoeCard;
