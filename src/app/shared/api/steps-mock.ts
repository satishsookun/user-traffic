
export const steps = {
    "83030": {
        "flowchart_id": "created_operator_0",
        "step_id": "83030",
        "class": "declencheur",
        "type": "boxabandonpanier",
        "parents": [],
        "params": {
            "id": "boxabandonpanier"
        }
    },
    "83031": {
        "flowchart_id": "created_operator_1",
        "step_id": "83031",
        "class": "filtre",
        "type": "boxfiltre_3",
        "parents": {
            "71160": {
                "parent_id": "83030",
                "parent_output": "1"
            }
        },
        "params": {
            "id": "boxfiltre_3",
            "inclusion": {
                "filtergroup": {
                    "segment_number": 1,
                    "groups": [
                        {
                            "spm-4": "Shopimind - Semi-professionnels"
                        }
                    ],
                    "operator": [
                        "or"
                    ],
                    "litteral_title": {
                        "groups": "Les groupes :",
                        "operator": "Le visiteur doit faire partie de : "
                    }
                }
            },
            "exclusion": [],
            "custom_description": "",
            "custom_title": "Clients",
            "grant_additional_delay": "0",
            "extra_time": {
                "value": "1",
                "unit": "DAY"
            },
            "outputs_number": "1"
        }
    },
    "83032": {
        "flowchart_id": "created_operator_2",
        "step_id": "83032",
        "class": "action",
        "type": "boxwait",
        "parents": {
            "71161": {
                "parent_id": "83031",
                "parent_output": "1"
            }
        },
        "params": {
            "id": "boxwait",
            "time_unit_select": {
                "unit": "HOUR",
                "value": "3"
            }
        }
    },
    "83033": {
        "flowchart_id": "created_operator_3",
        "step_id": "83033",
        "class": "action",
        "type": "boxabtest",
        "parents": {
            "71162": {
                "parent_id": "83032",
                "parent_output": "1"
            }
        },
        "params": {
            "id": "boxabtest",
            "outputs_number_test": "2"
        }
    },
    "83034": {
        "flowchart_id": "created_operator_4",
        "step_id": "83034",
        "class": "action",
        "type": "boxsendemail",
        "parents": {
            "71163": {
                "parent_id": "83033",
                "parent_output": "1"
            }
        },
        "params": {
            "id": "boxsendemail",
            "template_display_reduction49237_method": "1",
            "template_display_reduction49237_type": "1",
            "template_display_reduction49237_identifiant": "",
            "template_display_reduction49237_amount": "0",
            "template_display_reduction49237_minorderamount": "",
            "template_display_reduction49237_validtime": "0",
            "template_display_reduction49237_duplicate": "",
            "template_display_reduction49237_prefix": "",
            "template_reduction49237_descript": "a:1:{s:2:\"fr\";s:17:\"Votre r\u00e9duction.\";}",
            "template_message_subject": "a:1:{s:2:\"fr\";s:36:\"Votre s\u00c3\u00a9lection vous attend\u00e2?\u00a6\";}",
            "template_message_expname": {
                "fr": "Bleulibellule"
            },
            "template_message_expmail": {
                "fr": "noreply@bleulibellule.com"
            },
            "template_message_replytomail": {
                "fr": "noreply@bleulibellule.com"
            },
            "template_display_selector_id": "49237",
            "template_display_message_langs": "[\"fr\"]",
            "display_popup_on_site": "0",
            "reuse_a_previous_coupon": "0"
        }
    },
    "83035": {
        "flowchart_id": "created_operator_5",
        "step_id": "83035",
        "class": "action",
        "type": "boxsendemail",
        "parents": {
            "71164": {
                "parent_id": "83033",
                "parent_output": "2"
            }
        },
        "params": {
            "id": "boxsendemail",
            "template_display_reduction49238_method": "1",
            "template_display_reduction49238_type": "1",
            "template_display_reduction49238_identifiant": "",
            "template_display_reduction49238_amount": "0",
            "template_display_reduction49238_minorderamount": "",
            "template_display_reduction49238_validtime": "0",
            "template_display_reduction49238_duplicate": "",
            "template_display_reduction49238_prefix": "",
            "template_reduction49238_descript": "a:1:{s:2:\"fr\";s:17:\"Votre r\u00e9duction.\";}",
            "template_message_subject": {
                "fr": "N'oubliez pas vos produits..."
            },
            "template_message_expname": {
                "fr": "Bleulibellule"
            },
            "template_message_expmail": {
                "fr": "noreply@bleulibellule.com"
            },
            "template_message_replytomail": {
                "fr": "noreply@bleulibellule.com"
            },
            "template_display_selector_id": "49238",
            "template_display_message_langs": "[\"fr\"]",
            "display_popup_on_site": "0",
            "reuse_a_previous_coupon": "0"
        }
    }
}