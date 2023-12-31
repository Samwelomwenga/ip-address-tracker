import PropsTypes from "prop-types";
import {
  StyledDetaile,
  StyledContainerSection,
StyledSection,
  StyledH6,
  StyledSpan,
  StyledHr,
} from "./styled/IPAddressDetailes.Styled";
const IPAddressDetailes = ({ geoLocation, loading }) => {
  const {
    as: { asn },
    ip,
    location: { country, city, timezone },
    isp,
  } = geoLocation;
  return (
    loading && <h1>Loading...</h1>,
    (
      <StyledContainerSection>
        <section>
          <StyledH6> IP ADDRESS</StyledH6>
          <StyledDetaile>{ip}</StyledDetaile>
        </section>

        <section style={{display:"flex"}}>
        <StyledHr></StyledHr>
      <div>
      <StyledH6>LOCATION</StyledH6>
          <StyledDetaile>
            {city ? city : "_"}
            {", "}
            {country ? country : "_"} <StyledSpan>{asn ? asn : "_"}</StyledSpan>
          </StyledDetaile>
      </div>
        </section>
        <StyledSection>
        <StyledHr></StyledHr>

         <div>
         <StyledH6>TIMEZONE</StyledH6>
          <StyledDetaile>UTC {timezone ? timezone : "_"}</StyledDetaile>
         </div>
        </StyledSection>
        <StyledSection>
          <StyledHr></StyledHr>
        <div>
        <StyledH6>ISP</StyledH6>
          <StyledDetaile>{isp ? isp : "_"}</StyledDetaile>
        </div>
        </StyledSection>
      </StyledContainerSection>
    )
  );
};

IPAddressDetailes.propTypes = {
  geoLocation: PropsTypes.object.isRequired,
  loading: PropsTypes.bool.isRequired,
};

export default IPAddressDetailes;
