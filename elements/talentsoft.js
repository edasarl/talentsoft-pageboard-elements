Pageboard.elements.settings.properties.grants.items.anyOf.push({
	const: 'talentsoft',
	$level: 999, // just below writer
	title: 'TalentSoft',
	description: 'Application'
});

Pageboard.elements.talentsoft_offer = {
	title: 'TalentSoft Offer',
	group: 'talentsoft',
	standalone: true,
	required: [],
	properties: {
		reference: {
			type: 'string'
		},
		isTopOffer: {
			type: 'boolean'
		},
		title: {
			type: 'string'
		},
		location: {
			type: 'string'
		},
		modificationDate: {
			type: 'string',
			format: 'date',
			coerce: true,
			nullable: true
		},
		beginningDate: {
			type: 'string',
			format: 'date',
			coerce: true,
			nullable: true
		},
		startPublicationDate: {
			type: 'string',
			format: 'date',
			coerce: true,
			nullable: true
		},
		contractType: {
			type: 'object',
			properties: {
				label: {
					type: 'string'
				},
				code: {
					type: 'string'
				}
			}
		},
		offerFamilyCategory: {
			type: 'object',
			properties: {
				label: {
					type: 'string'
				},
				code: {
					type: 'string'
				},
				clientCode: {
					type: 'string'
				}
			}
		},
		organisationName: {
			type: 'string'
		},
		organisationDescription: {
			type: 'string',
			nullable: true
		},
		organisationLogoUrl: {
			type: 'string',
			nullable: true
		},
		contractDuration: {
			type: 'string',
			nullable: true
		},
		contractTypeCountry: {
			type: 'object',
			properties: {
				label: {
					type: 'string'
				},
				code: {
					type: 'string'
				}
			}
		},
		description1: {
			type: 'string',
			nullable: true
		},
		description1Formatted: {
			type: 'string',
			nullable: true
		},
		description2: {
			type: 'string',
			nullable: true
		},
		description2Formatted: {
			type: 'string',
			nullable: true
		},
		salaryRange: {
			type: 'object',
			properties: {
				label: {
					type: 'string'
				},
				code: {
					type: 'string'
				}
			},
			nullable: true
		},
		geographicalLocation: {
			type: 'array',
			items: {
				type: 'object',
				properties: {
					label: {
						type: 'string'
					},
					code: {
						type: 'string'
					}
				}
			}
		},
		country: {
			type: 'array',
			items: {
				type: 'object',
				properties: {
					label: {
						type: 'string'
					},
					code: {
						type: 'string'
					}
				}
			}
		},
		region: {
			type: 'array',
			items: {
				type: 'object',
				properties: {
					label: {
						type: 'string'
					},
					code: {
						type: 'string'
					}
				}
			}
		},
		departement: {
			type: 'array',
			items: {
				type: 'object',
				properties: {
					label: {
						type: 'string'
					},
					code: {
						type: 'string'
					}
				}
			}
		},
		latitude: {
			type: 'string',
			nullable: true
		},
		longitude: {
			type: 'string',
			nullable: true
		},
		professionalCategory: {
			type: 'object',
			properties: {
				label: {
					type: 'string'
				},
				code: {
					type: 'string'
				}
			}
		},
		offerUrl: {
			type: 'string',
			format: 'uri'
		}
	}
};

Pageboard.elements.talentsoft_application = {
	title: 'TalentSoft Application',
	group: 'talentsoft',
	properties: {
		type: {
			anyOf: [{
				const: "offer",
				title: "Offer"
			}, {
				const: "spontaneous",
				title: "Spontaneous"
			}]
		},
		offerReference: {
			type: 'string'
		},
		offerTitle: {
			type: 'string'
		},
		organisation: {
			type: 'object',
			properties: {
				code: {
					type: 'string'
				}
			}
		},
		origin: {
			type: 'object',
			properties: {
				code: {
					type: 'string'
				}
			}
		},
		motivation: {
			type: 'string'
		},
		files: {
			type: 'array',
			items: {
				type: 'object',
				properties: {
					fileType: {
						type: 'object',
						properties: {
							code: {
								type: 'string'
							}
						}
					}
				}
			}
		},
		date: {
			type: 'string',
			format: 'date-time'
		}
	}
};

Pageboard.elements.talentsoft_referential = {
	title: 'TalentSoft Referential',
	group: 'talentsoft',
	properties: {
		type: {
			type: 'string'
		},
		code: {
			type: 'string'
		},
		clientCode: {
			type: 'string'
		},
		label: {
			type: 'string'
		},
		active: {
			type: 'boolean'
		}
	}
};
