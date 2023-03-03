import { Inject, Injectable } from '@nestjs/common';
import { Pool } from 'node-postgres';
import { ModelClass } from 'objection';

import {  DataSource, Repository } from "typeorm"; 
import FundsModel from './model/cams';
import FundkarvyModel from './model/karvy';
const { Readable } = require('stream');
const fs =require('fs')
const csv =  require('csv-parser')
const async=require('async')
const { Client } = require('pg')
@Injectable()
export class AppService {
  constructor(
    @Inject('FundsModel')
    private fundmodel:ModelClass<FundsModel>,
    @Inject('FundkarvyModel')
    private fundkarvymodel:ModelClass<FundkarvyModel>
) { }
  async bulkupload (file:any,body:any): Promise<string> {
    
    const csv=require('csvtojson');
    const csvfilepath=process.cwd()+'/'+file.path;
    const v= await csv().fromFile(csvfilepath);
   //  console.log(v)
   //  const arr=[]
    for(let itr=0;itr<v.length;itr++){
     const prd= v[itr]
    //  console.log(prd)
    if(body.type=="cams"){
      const exist=await this.fundmodel.query().where({uid:("cams"+prd?.AMC_CODE + prd?.FOLIO_NO + prd?.SCHEME +prd?.TRADDATE+ prd?.POSTDATE +prd?.TRXNTYPE +prd?.UNITS)});
    console.log(exist.length)
        if(exist.length<1){
     const upload =await this.fundmodel.query().insert({
      uid:"cams"+prd?.AMC_CODE + prd?.FOLIO_NO + prd?.SCHEME +prd?.TRADDATE+ prd?.POSTDATE +prd?.TRXNTYPE +prd?.UNITS,
      productCode: prd?.PRODCODE,
      fund :prd?.AMC_CODE,
      folioNumber :prd?.FOLIO_NO,
      dividentOption : prd?.DIVOPT,
      fundDescription : prd?.SCHEME,
      transactionNumber :prd?.TRXNNO,
      investorName : prd?.INV_NAME,
      transactionMode :prd?.TRXNMODE,
      transactionStatus : prd?.TRXNSTAT,
      processDate : prd?.POSTDATE,
      units: prd?.UNITS,
      amount :prd?.AMOUNT,
      agentCode :prd?.BROKCODE,
      subBrokerCode : prd?.SUBBROK,
      reportDate :prd?.REP_DATE,
      applicationNumber :prd?.APPLICATIO,
      transactionDescription :prd?.TRXN_NATUR,
      transactionType :prd?.TRXNTYPE,
      navDate :prd?.TRADDATE,
      assetType :prd?.SCHEME_TYP,
      subTranType :prd?.TRXNSUBTYP,
      cityCategory :prd?.TER_LOCATI,
      euin :prd?.EUIN,
      trCharges :prd?.TRXN_CHARG,
      clientId :prd?.CLIENTID,
      dpId :prd?.DP_ID,
      stt :prd?.STT,
      ihno :prd?.USRTRXNO,
      branchCode :prd?.USERCODE,
      inwardNumber :prd?.USRTRXNO,
      pan1 :prd?.PAN,
      tdsAmount :prd?.TOTAL_TAX,
      loadAmount :prd?.LOAD,
      status :prd?.TAX_STATUS,
      nav :prd?.NAV,
      euinValidIndicator :prd?.EUIN_VALID,
      euinDeclarationIndicator :prd?.EUIN_OPTED,
      subBrokerArnCode :prd?.SUB_BRK_AR,
      sipRegnDate :prd?.SYS_REGN_D,
      sipRegSlNo :prd?.SIPTRXNNO,
      commonAccountNumber :prd?.CAN,
      stampduty :prd?.STAMP_DUTY,
      transactionFlag :prd?.TRFLAG,
      altFolio :prd?.ALTFOLIO,
      ftAccno :prd?.FTACCNO,
      rejTrnoOrgNo :prd?.REJTRNOOR2,
      price :prd?.PURPRICE,
      instrumentNumber :prd?.CHQNO,
      toProductCode :prd?.TARG_SRC_S,
      tpPtrNo :prd?.REVERSAL_C,
      tdTrxnmode :prd?.EXCHANGE_F,
      remarks :prd?.REMARKS
     })
    }
  }


  if(body.type=="karvy"){
    const exist=await this.fundmodel.query().where({uid:("karvy"+prd['Fund'] + prd['Folio Number'] + prd['Fund Description'] +prd['Nav Date']+ prd['Process Date'] +prd['Transaction Type'] +prd['Units'])});
  console.log(exist.length)
      if(exist.length<1){
   const upload =await this.fundmodel.query().insert({
    uid:"karvy"+prd['Fund'] + prd['Folio Number'] + prd['Fund Description'] +prd['Nav Date']+ prd['Process Date'] +prd['Transaction Type'] +prd['Units'],
    productCode: prd['Product Code'],
    fund :prd['Fund'],
    folioNumber :prd['Folio Number'],
    dividentOption : prd['Dividend Option'],
    fundDescription : prd['Fund Description'],
    transactionNumber :prd['Transaction Number'],
    investorName : prd['Investor Name'],
    transactionMode :prd['Investor Name'],
    transactionStatus : prd['Transaction Status'],
    processDate : prd['Process Date'],
    units: prd['Units'],
    amount :prd['Amount'],
    agentCode :prd['Agent Code'],
    subBrokerCode : prd['Sub-Broker Code'],
    reportDate :prd['Report Date'],
    applicationNumber :prd['Application Number'],
    transactionDescription :prd['Transaction Description'],
    transactionType :prd['Transaction Type'],
    navDate :prd['Nav Date'],
    assetType :prd['AssetType'],
    subTranType :prd['SubTranType'],
    cityCategory :prd['CityCategory'],
    euin :prd['EUIN'],
    trCharges :prd['TrCharges'],
    clientId :prd['ClientId'],
    dpId :prd['DpId'],
    stt :prd['STT'],
    ihno :prd['Ihno'],
    branchCode :prd['Branch Code'],
    inwardNumber :prd['inwardNumber'],
    pan1 :prd['PAN1'],
    tdsAmount :prd['TDSAmount'],
    loadAmount :prd['loadAmount'],
    status :prd['Status'],
    nav :prd['Nav'],
    euinValidIndicator :prd['EUIN Valid Indicator'],
    euinDeclarationIndicator :prd['EUIN Declaration Indicator'],
    subBrokerArnCode :prd['Sub Broker ARN Code'],
    sipRegnDate :prd['SIP Regn Date'],
    sipRegSlNo :prd['sipregslno'],
    commonAccountNumber :prd['Common Account Number'],
    stampduty :prd['Stamp Duty Charges'],
    transactionFlag :prd['Transaction Flag'],
    altFolio :prd['altFolio'],
    ftAccno :prd['ftAccno'],
    rejTrnoOrgNo :prd['RejTrnoOrgNo'],
    price :prd['Price'],
    instrumentNumber :prd['Instrument Number'],
    toProductCode :prd['ToProductCode'],
    tpPtrNo :prd['tpPtrNo'],
    tdTrxnmode :prd['td_trxnmode'],
    remarks :prd['Remarks'],
   })
  }
}
    }



   

    return 'Hello World!';
  }

  
  
}
