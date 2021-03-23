export const popUpTemplate = {
    title: "Crime {NAME}",
    content: [
        {
            type: 'fields',
            fieldInfos: [
                {
                    fieldName: 'CrimeCnt',
                    visible: true,
                    label: 'Number of Crimes: '
                },
                {
                    fieldName: 'NarcoticsC',
                    visible: true,
                    label: 'Number of narcotics crimes: '
                },
            ]
        },
        {
            type: "media",
            mediaInfos: [
                {
                    title: 'Chicago Crime and Narcotics',
                    type: 'pie-chart',
                    caption: "Crime rate in comparison to narcotics rate",
                    value: {
                        theme: "Julie",
                        fields: ['CrimeRate', 'NarcoticsR']
                    }
                }
            ]
        }
    ]
};
