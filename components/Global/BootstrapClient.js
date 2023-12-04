'use client';

// Hooks
import { useEffect } from 'react';

export default function BootstrapClient() {
	useEffect(() => {
		require('@popperjs/core/dist/umd/popper.min.js');
		require('bootstrap/dist/js/bootstrap.bundle.min.js');
	}, []);

	return null;
}
