import { Inject, Injectable } from '@nestjs/common';
import { Pool } from 'node-postgres';
import { ModelClass } from 'objection';

import {  DataSource, Repository } from "typeorm"; 
import FundsModel from './model/addresses';
const { Readable } = require('stream');
const fs =require('fs')
const csv =  require('csv-parser')
const async=require('async')
const { Client } = require('pg')
@Injectable()
export class AppService {
  constructor(
    @Inject('FundsModel')
    private fundmodel:ModelClass<FundsModel>
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
     const upload =await this.fundmodel.query().insert({
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



   

    return 'Hello World!';
  }

  
  
}
