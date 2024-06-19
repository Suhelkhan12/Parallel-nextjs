import CsClientName from "../CsClientName/CsClientName";
import CsDeliverables from "../CsDeliverables/CsDeliverables";
import CsPlatformType from "../CsPlatformType/CsPlatformType";

const CasestudyBottomDetials = () => {
  return (
    <div className="casestudy_bottom-details">
      <div className="padding-global">
        <div className="container-large">
          <div className="casestudy_bottom-details-wrapper">
            <CsPlatformType />
            <CsDeliverables />
            <CsClientName />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasestudyBottomDetials;
