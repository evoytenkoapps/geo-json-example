const fs = require("fs");
const path = require("path");
const currentEnv = process.env.NODE_ENV || "prod";
const secureSettings = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "./settings.json"), "utf8")
)[currentEnv];

export const environment: any = {};

console.log("currentEnv", currentEnv);

if (currentEnv === "prod") {
  // prod
  environment.http_type = "http";
  environment.isProd = true;
  environment.host = "localhost";
  environment.port = "8882";
  environment.db_host = secureSettings.db_host;
  environment.db_port = secureSettings.db_port;
  environment.db_password = secureSettings.db_password;
  environment.db_user = secureSettings.db_user;
  environment.db_dbname = secureSettings.db_dbname;
  environment.table_tasks = "postgis.tasks";
  environment.table_users = "postgis.users";
  environment.table_tmp_users = "postgis.tmp_users";
  environment.table_conv = "postgis.conversations";
  environment.table_msg = "postgis.messages";
  environment.table_comp = "postgis.companions";
  environment.table_conv_support = "postgis.conversations_support";
  environment.table_messages_support = "postgis.messages_support";
  environment.table_subscriptions = "postgis.subscriptions";
  environment.table_subscriptions_tags = "postgis.subscription_tags";
  environment.table_subscription_result = "postgis.subscription_result";
  environment.table_read_task = "postgis.read_task";
  environment.table_bad_words = "postgis.bad_words";
  environment.table_user_ct_links = "postgis.user_contact_links";
  environment.table_user_ct_phone = "postgis.user_contact_phone";
  environment.table_user_avatar = "postgis.user_avatar";
  environment.table_user_notify = "postgis.user_notify";
  environment.secret = secureSettings.jwtKey;
  environment.jwt_expires = 2592000;
  environment.jwt_restore_expires = 86400;
  environment.mailService = secureSettings.mailService;
  environment.mail_login = secureSettings.mailLogin;
  environment.mail_password = secureSettings.mailPassword;
  environment.bcrypt_salt_rounds = 10;
  environment.close_tasks_interval = 30000;
  environment.service_http_type = "https";
  environment.service_host = "jozik.ru";
  environment.dir_avatars = "/srv/avatars";
  environment.tmp_dir_avatars = "/srv/avatars/tmp";
  environment.max_avatar_size = 10 * 1024 * 1024;
  environment.uuid_namespace = secureSettings.uuid_namespace;
  environment.isSendNotify = true;
  environment.telegram_support_user_id = 1362157384;
  environment.telegram_bot_api_token = secureSettings.telegram_bot_api_token;
  environment.helpDeskTables = {
    conversations: "postgis.conversations_support",
    messages: "postgis.messages_support"
  };
}
if (currentEnv === "test") {
  // test
  environment.http_type = "http";
  environment.host = "localhost";
  environment.port = "8882";
  environment.db_host = secureSettings.db_host;
  environment.db_port = secureSettings.db_port;
  environment.db_password = secureSettings.db_password;
  environment.db_user = secureSettings.db_user;
  environment.db_dbname = secureSettings.db_dbname;
  environment.table_tasks = "postgis.tasks";
  environment.table_users = "postgis.users";
  environment.table_tmp_users = "postgis.tmp_users";
  environment.table_conv = "postgis.conversations";
  environment.table_msg = "postgis.messages";
  environment.table_comp = "postgis.companions";
  environment.table_subscriptions = "postgis.subscriptions";
  environment.table_subscriptions_tags = "postgis.subscription_tags";
  environment.table_subscription_result = "postgis.subscription_result";
  environment.table_read_task = "postgis.read_task";
  environment.table_bad_words = "postgis.bad_words";
  environment.table_conv_support = "postgis.conversations_support";
  environment.table_messages_support = "postgis.messages_support";
  environment.table_user_ct_links = "postgis.user_contact_links";
  environment.table_user_ct_phone = "postgis.user_contact_phone";
  environment.table_user_avatar = "postgis.user_avatar";
  environment.table_user_notify = "postgis.user_notify";
  environment.secret = secureSettings.jwtKey;
  environment.jwt_expires = 2592000;
  environment.jwt_restore_expires = 300;
  environment.mailService = secureSettings.mailService;
  environment.mail_login = secureSettings.mailLogin;
  environment.mail_password = secureSettings.mailPassword;
  environment.bcrypt_salt_rounds = 10;
  environment.close_tasks_interval = 30000;
  environment.service_http_type = "https";
  environment.service_host = "test.jozik.ru";
  environment.dir_avatars = "/srv/avatars";
  environment.tmp_dir_avatars = "/srv/avatars/tmp";
  environment.max_avatar_size = 10 * 1024 * 1024;
  environment.uuid_namespace = secureSettings.uuid_namespace;
  environment.isSendNotify = true;
  environment.telegram_support_user_id = 287853668;
  environment.telegram_bot_api_token = secureSettings.telegram_bot_api_token;
  environment.helpDeskTables = {
    conversations: "postgis.conversations_support",
    messages: "postgis.messages_support"
  };
  environment.test = {
    auth: {
      email: "masquitos@mail.ru",
      password: "12345"
    },
    reg: {
      name: "Евгений",
      email: "masquitos@mail.ru",
      password: "12345"
    }
  };
}
if (currentEnv === "devTest") {
  // devTest
  environment.http_type = "http";
  environment.host = "localhost";
  environment.port = "8881";
  environment.db_host = secureSettings.db_host;
  environment.db_port = secureSettings.db_port;
  environment.db_password = secureSettings.db_password;
  environment.db_user = secureSettings.db_user;
  environment.db_dbname = secureSettings.db_dbname;
  environment.table_tasks = "postgis.tasks";
  environment.table_users = "postgis.users";
  environment.table_tmp_users = "postgis.tmp_users";
  environment.table_conv = "postgis.conversations";
  environment.table_msg = "postgis.messages";
  environment.table_comp = "postgis.companions";
  environment.table_subscriptions = "postgis.subscriptions";
  environment.table_subscriptions_tags = "postgis.subscription_tags";
  environment.table_subscription_result = "postgis.subscription_result";
  environment.table_read_task = "postgis.read_task";
  environment.table_bad_words = "postgis.bad_words";
  environment.table_conv_support = "postgis.conversations_support";
  environment.table_messages_support = "postgis.messages_support";
  environment.table_user_ct_links = "postgis.user_contact_links";
  environment.table_user_ct_phone = "postgis.user_contact_phone";
  environment.table_user_avatar = "postgis.user_avatar";
  environment.table_user_notify = "postgis.user_notify";
  environment.secret = secureSettings.jwtKey;
  environment.jwt_expires = 86400;
  environment.jwt_restore_expires = 86400;
  environment.mailService = secureSettings.mailService;
  environment.mail_login = secureSettings.mailLogin;
  environment.mail_password = secureSettings.mailPassword;
  environment.bcrypt_salt_rounds = 10;
  environment.close_tasks_interval = 30000;
  environment.service_http_type = "http";
  environment.service_host = "home";
  environment.dir_avatars = "./avatars";
  environment.tmp_dir_avatars = "./tmp-avatars";
  environment.max_avatar_size = 10 * 1024 * 1024;
  environment.uuid_namespace = secureSettings.uuid_namespace;
  environment.isSendNotify = true;
  environment.telegram_support_user_id = 287853668;
  environment.telegram_bot_api_token = secureSettings.telegram_bot_api_token;
  environment.helpDeskTables = {
    conversations: "postgis.conversations_support",
    messages: "postgis.messages_support"
  };
}
if (currentEnv === "dev") {
  // dev
  environment.http_type = "http";
  environment.host = "localhost"; //'localhost';
  environment.port = "8881";
  environment.db_host = secureSettings.db_host;
  environment.db_port = secureSettings.db_port;
  environment.db_password = secureSettings.db_password;
  environment.db_user = secureSettings.db_user;
  environment.db_dbname = secureSettings.db_dbname;
  environment.table_tasks = "postgis.tasks";
  environment.table_users = "postgis.users";
  environment.table_tmp_users = "postgis.tmp_users";
  environment.table_conv = "postgis.conversations";
  environment.table_msg = "postgis.messages";
  environment.table_comp = "postgis.companions";
  environment.table_subscriptions = "postgis.subscriptions";
  environment.table_subscriptions_tags = "postgis.subscription_tags";
  environment.table_subscription_result = "postgis.subscription_result";
  environment.table_read_task = "postgis.read_task";
  environment.table_bad_words = "postgis.bad_words";
  environment.table_conv_support = "postgis.conversations_support";
  environment.table_messages_support = "postgis.messages_support";
  environment.table_user_ct_links = "postgis.user_contact_links";
  environment.table_user_ct_phone = "postgis.user_contact_phone";
  environment.table_user_avatar = "postgis.user_avatar";
  environment.table_user_notify = "postgis.user_notify";
  environment.secret = secureSettings.jwtKey;
  environment.jwt_expires = 86400;
  environment.jwt_restore_expires = 3600;
  environment.mailService = secureSettings.mailService;
  environment.mail_login = secureSettings.mailLogin;
  environment.mail_password = secureSettings.mailPassword;
  environment.bcrypt_salt_rounds = 10;
  environment.close_tasks_interval = 10000;
  environment.service_http_type = "http";
  environment.service_host = "localhost:8881";
  environment.dir_avatars = "C:\\Nginx\\html\\avatars";
  environment.tmp_dir_avatars = "./tmp-avatars";
  environment.max_avatar_size = 10 * 1024 * 1024;
  environment.uuid_namespace = secureSettings.uuid_namespace;
  environment.isSendNotify = false;
  environment.telegram_support_user_id = 287853668;
  environment.telegram_bot_api_token = secureSettings.telegram_bot_api_token;
  environment.helpDeskTables = {
    conversations: "postgis.conversations_support",
    messages: "postgis.messages_support"
  };
  environment.test = {
    auth: {
      email: "masquitos@mail.ru",
      password: "12345"
    },
    reg: {
      login: {
        name: "Евгений",
        email: "masquitos@mail.ru",
        password: "12345"
      }
    }
  };
}
