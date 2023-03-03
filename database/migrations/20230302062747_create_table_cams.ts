import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.raw(`
    CREATE TABLE tbl_cams_mst(
        id serial not null ,
        uid varchar(155),
        product_code varchar(200),
        fund varchar(200),
        folio_number varchar(200),
        divident_option varchar(200),
        fund_description varchar(200),
        transaction_number varchar(200),
        investor_name varchar(200),
        transaction_mode varchar(200),
        transaction_status varchar(200),
        process_date varchar(200),
        units integer,
        amount varchar(200),
        agent_code varchar(200),
        sub_broker_code varchar(200),
        report_date varchar(200),
        application_number varchar(200),
        transaction_description varchar(200),
        transaction_type varchar(200),
        nav_date varchar(200),
        asset_type varchar(200),
        sub_tran_type varchar(200),
        city_category varchar(200),
        euin varchar(200),
        tr_charges varchar(200),
        client_id varchar(200),
        dp_id varchar(200),
        stt varchar(200),
        ihno varchar(200),
        branch_code varchar(200),
        inward_number varchar(200),
        pan1 varchar(200),
        tds_amount varchar(200),
        load_amount varchar(200),
        status varchar(200),
        nav varchar(200),
        euin_valid_indicator varchar(200),
        euin_declaration_indicator varchar(200),
        sub_broker_arn_code varchar(200),
        sip_regn_date varchar(200),
        sip_reg_sl_no varchar(200),
        common_account_number varchar(200),
        stampduty varchar(200),
        transaction_flag varchar(200),
        alt_folio varchar(200),
        ft_accno varchar(200),
        rej_trno_org_no varchar(200),
        price varchar(200),
        instrument_number varchar(200),
        to_product_code varchar(200),
        tp_ptr_no varchar(200),
        td_trxnmode varchar(200),
        remarks varchar(200),
        updated_by varchar(155),
        created_by varchar(155),
        created_at DATETIME not null DEFAULT NOW(),
        updated_at DATETIME not null DEFAULT NOW()
        );`)
}


export async function down(knex: Knex): Promise<void> {
}

