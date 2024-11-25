import { LogoutButton } from '@/components/log-out/LogoutButton';

const ProfilePage = () => {
  return (
    <div>
      <h1 className="text-2xl" font-bold>
        Vous êtes connecté
      </h1>
      <LogoutButton />
    </div>
  );
};

export default ProfilePage;
