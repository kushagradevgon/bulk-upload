import { Model } from "objection";
import { BaseModel } from "./baseModel";






  export default class FundkarvyModel extends BaseModel {
    
    static tableName = 'tbl_karvy_mst';
    productCode?:string
        fund ?:string
        folioNumber ?:string
        dividentOption ?:string
        fundDescription ?:string
        transactionNumber ?:string
        investorName ?:string
        transactionMode ?:string
        transactionStatus ?:string
        processDate ?:string
        units?:number
        amount ?:string
        agentCode ?:string
        subBrokerCode ?:string
        reportDate ?:string
        applicationNumber ?:string
        transactionDescription ?:string
        transactionType ?:string
        navDate ?:string
        assetType ?:string
        subTranType ?:string
        cityCategory ?:string
        euin ?:string
        trCharges ?:string
        clientId ?:string
        dpId ?:string
        stt ?:string
        ihno ?:string
        branchCode ?:string
        inwardNumber ?:string
        pan1 ?:string
        tdsAmount ?:string
        loadAmount ?:string
        status ?:string
        nav ?:string
        euinValidIndicator ?:string
        euinDeclarationIndicator ?:string
        subBrokerArnCode ?:string
        sipRegnDate ?:string
        sipRegSlNo ?:string
        commonAccountNumber ?:string
        stampduty ?:string
        transactionFlag ?:string
        altFolio ?:string
        ftAccno ?:string
        rejTrnoOrgNo ?:string
        price ?: string
        instrumentNumber ?:string
        toProductCode ?:string
        tpPtrNo ?:string
        tdTrxnmode ?:string
        remarks ?:string
    

    
   
     
      
  }
  