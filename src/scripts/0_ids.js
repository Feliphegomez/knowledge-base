var ids = [
  "redWarning",
  "redWarningLink",
  // List Ids
  "breadCrumbHome",
  "breadCrumbCategoryTitleGettingStarted",
  "categoriesCategoryTitleGettingStarted",
  "categoryGettingStartedonMyEtherWalletcom",
  "categoryHowtoCreateaWallet",
  "categoryHowtoProperlySaveBackUpYourWallet",
  "categoryHowtoAccessYourWallet",
  "categoryProtectingYourselfandYourFunds",
  "categoryCheckingtheBalanceofYourAccount",
  "categoryGettingBacktotheBasics10TipsforNewbies",
  "categoryAGlossaryofCommonTermsintheEthereumCryptoSpace",
  "categoryWhatstheDifferenceBetweenanExchangeandMyEtherWallet",
  "categoryMyEtherWalletsQuickTips",
  "categoryGettingStartedWithMyEtherWalletTutorialsforBeginners",
  // Block Ids
  "categoryGettingStarted",
  // Article Ids
  // Getting started
  "articleGettingStartedonMyEtherWalletcom",
  "articleTitleGettingStartedonMyEtherWalletcom",
  "articleTakeSomeTime",
  "fundStolenWarning",
  "whatIsMew",
  "whatIsMew_1",
  "whatIsMew_2",
  "whatIsMew_3",
  "whatIsMew_4",
  "mewNotABank",
  "mewNotABank_1",
  "mewNotABank_2",
  "mewNotABank_3",
  "mewNotABank_4",
  "mewNotABank_5",
  "mewIsAnInterface",
  "mewIsAnInterface_1",
  "mewIsAnInterface_2",
  "mewIsAnInterface_3",
  "mewIsAnInterface_4",
  "mewIsAnInterface_5",
  "mewIsAnInterface_6",
  "mewIsAnInterface_7",
  "wtfBlockchain",
  "wtfBlockchain_1",
  "wtfBlockchain_2",
  "wtfBlockchain_3",
  "wtfBlockchain_4",
  "wtfBlockchain_5",
  "wtfBlockchain_6",
  "needYouToUnderstand",
  "needYouToUnderstand_1",
  "needYouToUnderstand_2",
  "needYouToUnderstand_3",
  "needYouToUnderstand_4",
  "needYouToUnderstand_5",
  "youAndOnlyYou",
  "youAndOnlyYou_1",
  "youAndOnlyYou_2",
  "youAndOnlyYou_3",
  "mewCantDo_1",
  "mewCantDo_2",
  "mewCantDo_3",
  "mewCantDo_4",
  "mewCantDo_5",
  "mewCantDo_6",
  "howToProtectYourselfFromPhishing",
  "howToProtectYourselfFromPhishing_1",
  "howToProtectYourselfFromPhishing_2",
  "howToProtectYourselfFromPhishing_3",
  "howToProtectYourselfFromPhishing_4",
  "howToProtectYourselfFromPhishing_5",
  "howToProtectYourselfFromPhishing_6",
  "howToProtectYourselfFromPhishing_7",
  "howToProtectYourselfFromScam",
  "howToProtectYourselfFromScam_1",
  "howToProtectYourselfFromScam_2",
  "howToProtectYourselfFromScam_3",
  "howToProtectYourselfFromScam_4",
  "howToProtectYourselfFromScam_5",
  "howToProtectYourselfFromLoss",
  "howToProtectYourselfFromLoss_1",
  "howToProtectYourselfFromLoss_2",
  "howToProtectYourselfFromLoss_3",
  "howToProtectYourselfFromLoss_4",
  "howToProtectYourselfFromLoss_5",
  "moreSecurityTips",
  "onwards",
  // How to create a wallet
  "articleHowtoCreateaWallet",
  "articleTitleHowtoCreateaWallet",
  "preface",
  "prefacePar_1",
  "prefacePar_2",
  "how-to",
  "howTo_1",
  "howTo_2",
  "howTo_2a",
  "howTo_3",
  "howTo_4",
  "howTo_4a",
  "howTo_5",
  "howTo_6",
  "howTo_6a",
  "howTo_7",
  "howTo_7a",
  "howTo_8",
  "howTo_9",
  "howTo_9a",
  "howTo_10",
  "howTo_10a",
  "howTo_11",
  "howTo_12",
  "howTo_13",
  "safe-storage-of-backups",
  "safeStorageBackups_1",
  "safeStorageBackups_2",
  "we-cannot-recover-your-key",
  "cannotRecoverKey_1",
  "cannotRecoverKey_2",
  "related-reading",
  "relatedReading_1",
  "relatedReading_2",
  "short-version-advanced-users-only-",
  "shortVer_1",
  "shortVer_2",
  "shortVer_3",
  "shortVer_4",
  "shortVer_5",
  "shortVer_6",
  "shortVer_7",
  "shortVer_8",
  "shortVer_9",
  "shortVer_10",
  // How to properly save & backup wallet
  "articleHowtoProperlySaveBackUpYourWallet",
  "articleTitleHowtoProperlySaveBackUpYourWallet",
  // How to access your wallet
  "articleTitleHowtoAccessYourWallet",
  "articleHowtoAccessYourWallet",
  "htayw_1",
  "htayw_2",
  "accessing-your-wallet",
  "ayw_1",
  "ayw_2",
  "ayw_3",
  "ayw_4",
  "ayw_5",
  "ayw_6",
  "ayw_6a",
  "ayw_7",
  "ayw_8",
  "the-future",
  "thefuture_1",
  "thefuture_2",
  "thefuture_3",
  "thefuture_4",
  "thefuture_5",
  "relatedReading_3",
  "relatedReading_4",
  "relatedReading_5",
  "relatedReading_6",
  // Protecting Yourself and Your Funds
  "articleProtectingYourselfandYourFunds",
  "articleTitleProtectingYourselfandYourFunds",
  "1-get-yourself-a-ledger-or-trezor-hardware-wallet-",
  "pyayfp_1",
  "pyayfl_1",
  "pyayfl_2",
  "pyayfp_2",
  "2-bookmark-your-crypto-sites-",
  "pyayfl_3",
  "3-install-the-eal-chrome-extension-https-chrome-google-com-webstore-detail-etheraddresslookup-pdknmigbbbhmllnmgdfalmedcmcefdfn-or-the-metamask-chrome-extension-https-chrome-google-com-webstore-detail-metamask-nkbihfbeogaeaoehlefnkodbefgpgknn-to-warn-you-if-you-go-to-a-crypto-phishing-link-",
  "4-use-mew-locally-offline-https-myetherwallet-github-io-knowledge-base-offline-running-myetherwallet-locally-html-",
  "5-do-not-trust-messages-or-addresses-or-urls-sent-via-private-message-always-verify-information-w-a-secondary-source-",
  "pyayfl_4",
  "pyayfl_5",
  "pyayfl_6",
  "6-turn-on-2fa-for-everything-",
  "pyayfl_7",
  "pyayfl_8",
  "pyayfl_9",
  "7-for-token-sales-do-not-trust-any-address-except-the-one-posted-on-the-official-site-",
  "pyayfl_10",
  "8-double-check-the-url-triple-check-github-urls-",
  "pyayfl_11",
  "pyayfl_12",
  "9-always-verify-that-the-site-you-landed-on-is-legit-",
  "pyayfl_13",
  "10-google-the-service-name-scam-or-reviews-",
  "pyayfl_14",
  "11-don-t-ever-run-remote-access-software-e-g-teamviewer-",
  "pyayfl_15",
  "12-don-t-use-brain-wallets",
  "pyayfl_16",
  "13-install-an-adblocker-that-actually-turns-off-google-bing-ads-",
  "pyayfl_17",
  "14-don-t-click-on-advertisements-",
  "pyayfl_18",
  "15-if-you-have-accidentally-visited-or-typed-a-malicious-site-clean-out-your-recent-history-and-autocomplete-",
  "pyayfl_19",
  "16-no-one-is-giving-you-free-or-discounted-eth-",
  "pyayfl_20",
  "17-the-guys-who-just-finish-their-token-sale-don-t-want-to-sell-you-tokens-via-slack-dm-",
  "pyayfl_21",
  "18-a-href-https-chrome-google-com-webstore-detail-myetherwallet-nlbmnnijcnlegkjjpcfjclmcfggfefdm-hl-en-target-_blank-download-the-mew-chrome-extension-a-",
  "19-only-unlock-your-wallet-when-you-want-to-send-a-transaction-check-your-balance-via-a-href-https-etherscan-io-target-_blank-https-etherscan-io-a-a-href-https-ethplorer-io-target-_blank-https-ethplorer-io-a-",
  "20-lastly-use-your-brain",
  "pyayfl_22",
  // Checking the balance of your account
  "articleCheckingtheBalanceofYourAccount",
  "articleTitleCheckingtheBalanceofYourAccount",
  "ctboya_p1",
  "ethereum",
  "ethereum_p",
  "tokens",
  "tokens_p1",
  "tokens_p2",
  "ethereum-classic",
  "ethereum-classic_p",
  "myetherwallet",
  "myetherwallet_p",
  // A Glossary of Common Terms in the Ethereum / Crypto Space
  "articleAGlossaryofCommonTermsintheEthereumCryptoSpace",
  "articleTitleAGlossaryofCommonTermsintheEthereumCryptoSpace",
  "words-are-hard",
  "agoctitecs_p",
  "-you-can-also-read-in-spanish-https-myetherwallet-github-io-knowledge-base-las-palabras-son-dificiles-definiendo-terminos-comunes-de-ethereum-thanks-to-faraggi-https-github-com-faraggi-words-are-hard-es-blob-master-words-are-hard-es-md-",
  "wallet",
  "wallet_l1",
  "wallet_l2",
  "account",
  "account_l1",
  "account_l2",
  "account_l3",
  "address-_-public-key-_",
  "address_l1",
  "address_l2",
  "address_l3",
  "address_l4",
  "address_l5",
  "public-key",
  "pubk_l1",
  "pubk_l2",
  "pubk_l3",
  "pubk_l4",
  "private-key",
  "privk_1",
  "privk_2",
  "privk_3",
  "privk_4",
  "privk_5",
  "privk_6",
  "privk_7",
  "keystore-file",
  "keystoref_l1",
  "keystoref_l2",
  "keystoref_l3",
  "keystoref_l4",
  "keystoref_l5",
  "keystoref_l6",
  "keystoref_l7",
  "keystoref_l8",
  "mnemonic-phrase",
  "mphrase_l1",
  "mphrase_l2",
  "mphrase_l3",
  "mphrase_l4",
  "mphrase_l5",
  "mphrase_l6",
  "mphrase_l7",
  "hardware-wallet-",
  "hardwarew_l1",
  "hardwarew_l2",
  "hardwarew_l3",
  "hardwarew_l4",
  "hardwarew_l5",
  "addressidenticon-addressicon-",
  "addressIdent_l1",
  "addressIdent_l2",
  "addressIdent_l3",
  "addressIdent_l4",
  "addressIdent_l5",
  "hexadecimal",
  "hexadecimal_l",
  "seed",
  "seed_l1",
  "seed_l2",
  "brain-wallet",
  "bw_l1",
  "bw_l2",
  "bw_l3",
  "bw_l4",
  "bw_l5",
  "entropy",
  "entropy_l1",
  "entropy_l2",
  "entropy_l3",
  "entropy_l4",
  "entropy_l5",
  "derive-derivation",
  "deriveDeriv_l1",
  "deriveDeriv_l2",
  "deriveDeriv_l3",
  "encryption",
  "encryption_l1",
  "encryption_l2",
  "encryption_l3",
  "encrypted-vs-unencrypted-keys",
  "encvunenc_l1",
  "encvunenc_l2",
  "encvunenc_l3",
  "encvunenc_l4",
  "decentralize-decentralization",
  "decentralize_l",
  "trustless",
  "trustless_l",
  "smart-contracts",
  "sc_l",
  "blockchain",
  "blockchain_l",
  "fixGlossary",
  // What's the difference between an exchange and myetherwallet
  "articleWhatstheDifferenceBetweenanExchangeandMyEtherWallet",
  "articleTitleWhatstheDifferenceBetweenanExchangeandMyEtherWallet",
  "wtdbaeam_p1",
  "wtdbaeam_p2",
  "wtdbaeam_p3",
  "wtdbaeam_p4",
  "wtdbaeam_p5",
  "wtdbaeam_p6",
  "wtdbaeam_p7",
  "wtdbaeam_p8",
  "wtdbaeam_p9",
  "wtdbaeam_l1",
  "wtdbaeam_l2",
  "wtdbaeam_l3",
  "wtdbaeam_l4",
  "wtdbaeam_l5",
  "wtdbaeam_p10",
  "wtdbaeam_internal",
  // Quicktips
  "articleMyEtherWalletsQuickTips",
  "articleTitleMyEtherWalletsQuickTips",
  "mewQuickT_1",
  "mewQuickT_2",
  "mewQuickT_3",
  "mewQuickT_4",
  "mewQuickT_5",
  "mewQuickT_6",
  "mewQuickT_7",
  "mewQuickT_8",
  "mewQuickT_9",
  "mewQuickT_10",
  "mewQuickT_11",
  "mewQuickT_12",
  "mewQuickT_13",
  "mewQuickT_14",
  "mewQuickT_15",
  "mewQuickT_16",
  "mewQuickT_17",
  "mewQuickT_18",
  "mewQuickT_19",
  "mewQuickT_20",
  "mewQuickT_21",
  "mewQuickT_22",
  "mewQuickT_23",
  "mewQuickT_24",
  "mewQuickT_25",
  "mewQuickT_26",
  "mewQuickT_27",
  "mewQuickT_28",
  "mewQuickT_29",
  "mewQuickT_30",
  "mewQuickT_31",
  "mewQuickT_32",
  "mewQuickT_33",
  "mewQuickT_34",
  "mewQuickT_35",
  "mewQuickT_36",
  "mewQuickT_37",
  "mewQuickT_38",
  "mewQuickT_39",
  "mewQuickT_40",
  "mewQuickT_41",
  "mewQuickT_42",
  "mewQuickT_43",
  "mewQuickT_44",
  "mewQuickT_45",
  "mewQuickT_46",
  "mewQuickT_47",
  "mewQuickT_48",
  "mewQuickT_49",
  "mewQuickT_50",
  "mewQuickT_51",
  "mewQuickT_52",
  "mewQuickT_53",
  "mewQuickT_54",
  "mewQuickT_55",
  "mewQuickT_56",
  "mewQuickT_57",
  "mewQuickT_58",
  "mewQuickT_59",
  "mewQuickT_60",
  "mewQuickT_61",
  "mewQuickT_62",
];
