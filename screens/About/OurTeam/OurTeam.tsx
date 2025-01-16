'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { CardPerson } from './CardPerson';
import { DialogDetailPerson } from './DialogDetailPerson';

const OurTeam = ({
  teamMembers,
  page = 'ourTeam',
}: {
  teamMembers: TeamMember[];
  page: 'ourTeam' | 'college-counseling';
}) => {
  const t = useTranslations();
  const [selectedMember, setSelectedMember] = useState<TeamMember>();

  const advisoryBoard = teamMembers.filter(m =>
    m.department.includes('advisory-board'),
  );
  const seniorLeadershipTeam = teamMembers.filter(m =>
    m.department.includes('senior-leadership-team'),
  );

  const collegeCounseling = teamMembers.filter(m =>
    m.department.includes('college-counseling'),
  );

  const highSchool = teamMembers.filter(m =>
    m.department.includes('high-school'),
  );

  const middleSchool = teamMembers.filter(m =>
    m.department.includes('middle-school'),
  );

  const onClose = () => setSelectedMember(undefined);
  const selectMember = (member: TeamMember) => {
    setSelectedMember(member);
  };

  return (
    <section id="our-team" className="mt-8">
      {page === 'ourTeam' && (
        <>
          {/* advisoryBoard */}
          <h3 className="heading-3 mb-4 lg:mb-6">
            {t('AboutPage.advisoryBoard')}
          </h3>
          <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {advisoryBoard.map(member => (
              <CardPerson
                key={member.id}
                name={member.name}
                position={member.role}
                avatarUrl={member.avatar?.url}
                onClick={() => selectMember(member)}
              />
            ))}
          </div>

          <div className="divide-line" />

          {/* seniorLeadershipTeam */}
          {seniorLeadershipTeam && (
            <>
              <h3 className="heading-3 mb-4 lg:mb-6">
                {t('AboutPage.seniorLeadershipTeam')}
              </h3>
              <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
                {seniorLeadershipTeam.map(member => (
                  <CardPerson
                    key={member.id}
                    name={member.name}
                    position={member.role}
                    avatarUrl={member.avatar.url}
                    onClick={() => selectMember(member)}
                  />
                ))}
              </div>
            </>
          )}
        </>
      )}

      {page === 'college-counseling' && (
        <>
          <h3 className="heading-3 mb-4 lg:mb-6">
            {t('Academics.college-counselor')}
          </h3>
          <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {collegeCounseling.map(member => (
              <CardPerson
                key={member.id}
                name={member.name}
                position={member.role}
                avatarUrl={member.avatar?.url}
                onClick={() => selectMember(member)}
              />
            ))}
          </div>
        </>
      )}

      {page === 'ourTeam' && (
        <>
          <div className="divide-line" />

          {/* highSchool */}
          {!!highSchool.length && (
            <>
              <h3 className="heading-3 mb-4 lg:mb-6">
                {t('AboutPage.highSchool')}
              </h3>
              <div className="w-full grid xl:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-5">
                {highSchool.map(member => (
                  <CardPerson
                    key={member.id}
                    name={member.name}
                    position={member.role}
                    avatarUrl={member.avatar.url}
                    onClick={() => selectMember(member)}
                  />
                ))}
              </div>
            </>
          )}

          <div className="divide-line" />

          {/* highSchool */}
          {!!middleSchool.length && (
            <>
              <h3 className="heading-3 mb-4 lg:mb-6">
                {t('AboutPage.middleSchool')}
              </h3>
              <div className="w-full grid xl:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-5">
                {middleSchool.map(member => (
                  <CardPerson
                    key={member.id}
                    name={member.name}
                    position={member.role}
                    avatarUrl={member.avatar.url}
                    onClick={() => selectMember(member)}
                  />
                ))}
              </div>
            </>
          )}
        </>
      )}

      {selectedMember && (
        <DialogDetailPerson person={selectedMember} onClose={onClose} />
      )}
    </section>
  );
};

export default OurTeam;
